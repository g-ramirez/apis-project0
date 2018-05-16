// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  let extension = filename.match(/.*\.([^\.]*)$/)[1];
	if (extension === 'html'){
		extension = 'text/html';
}
	else if (extension === 'css') {
		extension = 'text/css';
}
	else if (extension === 'jpeg'){
		extension = 'image/jpeg';
}
	else if (extension === 'jpg') {
		extension = 'image/jpeg';
}
	else {
		extension = 'text/plain';
}
  return extension;
}
