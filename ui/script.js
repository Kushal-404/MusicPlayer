const remote = require('@electron/remote');
const dialog = remote.dialog;


window.onload = () => {
    const selectFile = document.getElementById('selectFile');

   
    selectFile.onclick = async () => {
        console.log("Button clicked!");
        
        try {
            const result = await dialog.showOpenDialog({
                title: 'Select your Music',
                properties: ['openFile'],
                filters: [
                    { name: 'Music Files', extensions: ['mp3', 'wav', 'ogg'] }
                ]
            });

            if (!result.canceled) {
                const filePath = result.filePaths[0];
                console.log("Selected file:", filePath);
                
                // Update your UI elements
                document.querySelector('h2').innerText = "Playing: " + filePath.split('\\').pop();
                document.querySelector('p').innerText = "Path: " + filePath;
            }
        } catch (err) {
            console.error("Failed to open dialog:", err);
        }
    };
};