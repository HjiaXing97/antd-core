const { execSync } = require("child_process");

function runCommand(command) {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1); // Exit with error code
  }
}

console.log("Starting deployment...");

// Run build command
runCommand("lerna run build");

// Run version command
runCommand("lerna version");

// Run publish command
runCommand("lerna publish from-git");

console.log("Deployment completed.");
