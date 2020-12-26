function banUser() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Banned";
  alert("You are banned from Aero Client. Appeal at https://aeroclient.net/appeal");
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

function startupChecks() {
  document.getElementById('launchButton').innerHTML = "Initializing ACP";
  document.getElementById('launchButton').style.backgroundColor = " rgba(109, 0, 252, 0.671)";
  bannedCheck()
}

function notWhitelisted() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Unauthorized";
  alert("You are not authorized to launch Aero Client at this time.");
  console.log("[ACP]: Not whitelisted!");
}

function checkBranch2() {

  var branch2 = document.querySelector('.branch-button2').innerHTML
  var branch3 = document.querySelector('.branch-button3').innerHTML

 if(branch2 == "✔️Beta") {
    console.log("[Aero Client] Checked Beta Branch");
    launchClient2();
  } else if(branch3 == "✔️Dev") {
    console.log("[Aero Client] Checked Dev Branch");
    launchClient3();
  }
}
