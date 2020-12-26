function bannedCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5ca59f07ff7542ddbf7c0e92309d8dc2') >= 1) {
     banUser()
    } else if(data.indexOf('4fb9e313df1a41c6929ca3c066869e01') >= 1) {
     banUser()
    } else {
      checkBranch()
    }
  });
}
