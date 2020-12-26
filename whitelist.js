function whitelistCheck() {
  document.getElementById('launchButton').innerHTML = "Checking WL";
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('a87414f4a92f4f24ad3cb8ae3269951c') >= 1) {
      checkBranch2()
    } else if(data.indexOf('31a2dd697a0846eea6a6a26b72e6e349') >= 1) {
      checkBranch2()
    } else {
      notWhitelisted()
    }
  });
}
