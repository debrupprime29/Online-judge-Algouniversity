const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

const submissionsDir = path.join(__dirname, "..", "submissions");

if (!fs.existsSync(submissionsDir)) fs.mkdirSync(submissionsDir);

const runCpp = (req, res) => {
  const { code, input } = req.body;

  const filename = `solution_${Date.now()}.cpp`;
  const filePath = path.join(submissionsDir, filename);
  const inputFile = filePath.replace(".cpp", ".in");
  const outputExe = filePath.replace(".cpp", ".exe");

  fs.writeFileSync(filePath, code);
  fs.writeFileSync(inputFile, input || "");

  const compileCmd = `g++ ${filePath} -o ${outputExe}`;
  exec(compileCmd, (compileErr, _, __) => {
    if (compileErr) {
      return res.status(400).json({ error: "Compilation Error", details: compileErr.message });
    }

    const runCmd = `${outputExe} < ${inputFile}`;
    exec(runCmd, (runErr, stdout, stderr) => {
      if (runErr || stderr) {
        return res.status(400).json({ error: "Runtime Error", details: stderr || runErr.message });
      }
      return res.status(200).json({ output: stdout });
    });
  });
};

module.exports = { runCpp };
