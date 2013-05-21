function start ()
{
  console.log ("Request Handler 'start' was called");
  return "Hello...Starting...";
}

function upload ()
{
  console.log ("Request Handler 'upload' was called");
  return "Hello...Uploading...";
}

exports.start = start;
exports.upload = upload;
