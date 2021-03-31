function reportGenerate() {
  const fs = require('fs');
  const reportFilename = 'homepage';
  const reportDirectory = `report/`;
  const reportFileTypes = ['html'];
  return reportFileTypes.forEach((type) => {
    var fileToDelete = `${reportDirectory}/${reportFilename}.${type}`;
    if (fs.existsSync(fileToDelete)) {
      fs.unlinkSync(fileToDelete);
    }
  });
  ;
}

export {reportGenerate};