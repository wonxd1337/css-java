function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function createFolder() {
    let folderName = prompt("Enter folder name:");
    if (folderName) {
        document.getElementById("folderName").value = folderName;
        document.getElementById("folderForm").submit();
    }
}

function createFile() {
    let fileName = prompt("Enter file name:");
    if (fileName) {
        document.getElementById("fileName").value = fileName;
        document.getElementById("fileForm").submit();
    }
}

function renameItem(itemPath, isDirectory = false) {
    let currentName = itemPath.split('/').pop();
    let newName = prompt(`Enter new name for ${isDirectory ? 'directory' : 'file'}:`, currentName);
    if (newName && newName !== currentName) {
        let form = document.createElement('form');
        form.method = 'post';
        form.action = '';

        let inputPath = document.createElement('input');
        inputPath.type = 'hidden';
        inputPath.name = isDirectory ? 'rename_dir_submit' : 'rename_file';
        inputPath.value = '1';
        form.appendChild(inputPath);

        let inputNewName = document.createElement('input');
        inputNewName.type = 'hidden';
        inputNewName.name = 'new_name';
        inputNewName.value = newName;
        form.appendChild(inputNewName);

        let inputOldPath = document.createElement('input');
        inputOldPath.type = 'hidden';
        inputOldPath.name = isDirectory ? 'rename_dir' : 'rename';
        inputOldPath.value = itemPath;
        form.appendChild(inputOldPath);

        document.body.appendChild(form);
        form.submit();
    }
}

// Trigger file upload when the "Upload File" button is clicked
document.querySelector('.upload-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('fileUpload').click();
});

// Automatically submit the form when a file is selected
document.getElementById('fileUpload').addEventListener('change', function() {
    document.querySelector('.upload-form').submit();
});
