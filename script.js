// Get the gear icon and settings menu elements
const gearIcon = document.getElementById('gear-icon');
const settingsMenu = document.getElementById('settings');

// Function to open the settings menu in a pop-out window
function openPopoutWindow() {
    const width = 400;
    const height = 300;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popoutWindow = window.open('', 'Settings', `width=${width}, height=${height}, left=${left}, top=${top}`);
    const popoutDocument = popoutWindow.document;
    popoutDocument.write(`
        <html>
        <head>
            <title>Settings</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div id="settings">
                <h3>Background Colors</h3>
                <div class="color-picker">
                    <label for="color1">Color 1:</label>
                    <input type="color" id="color1" value="#eb92a4">
                </div>
                <div class="color-picker">
                    <label for="color2">Color 2:</label>
                    <input type="color" id="color2" value="#d473da">
                </div>
                <div class="color-picker">
                    <label for="color3">Color 3:</label>
                    <input type="color" id="color3" value="#7d0c7d">
                </div>
                <script src="script.js"></script>
            </div>
            <script>
                // Get the settings menu element in the pop-out window
                const settingsMenu = document.getElementById('settings');

                // Hide the settings menu in the pop-out window
                settingsMenu.style.display = 'none';

                // Function to toggle the visibility of the settings menu
                function toggleSettingsMenu() {
                    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
                }

                // Add event listener to the gear icon in the pop-out window
                const gearIcon = popoutDocument.getElementById('gear-icon');
                gearIcon.addEventListener('click', toggleSettingsMenu);
            </script>
        </body>
        </html>
    `);
}

// Add event listener to the gear icon to open the settings menu in a pop-out window
gearIcon.addEventListener('click', openPopoutWindow);
