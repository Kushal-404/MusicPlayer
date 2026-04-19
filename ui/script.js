
const remote = require('@electron/remote');

window.onload = () => {
    const selectFileBtn = document.getElementById('selectFile');
    const audioPlayer = document.getElementById('audioPlayer');

    if (selectFileBtn) {
        selectFileBtn.onclick = async () => {

            const dialog = remote.dialog; 

            try {
                const result = await dialog.showOpenDialog({
                    title: 'Select Music',
                    properties: ['openFile'],
                    filters: [{ name: 'Audio', extensions: ['mp3', 'wav'] }]
                });

                if (!result.canceled && result.filePaths.length > 0) {
                    const filePath = result.filePaths[0];
                    
                    const safePath = filePath.replace(/\\/g, '/');
                    audioPlayer.src = `file:///${safePath}`;
                    
                    audioPlayer.load();
                    audioPlayer.play();
                    
                    document.querySelector('h2').innerText = filePath.split('/').pop();
                }
            } catch (err) {
                console.error("Dialog error:", err);
            }
        };
    }
};