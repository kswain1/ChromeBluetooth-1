function deviceInfo_connect() {

    navigator.bluetooth.requestDevice
        ({
            acceptAllDevices: true,
            filters: [{
                services: ['0x00','e5f49879-6ee1-479e-bfec-3d35e13d3b88']
         }],
        })
        .then(device => {
            log('---------');
            log('> Name:      ' + device.name);
            log('> Id:        ' + device.id);
            log('> Connected: ' + device.gatt.connected);
        })
        .catch(error => {
            console.log('Error: ' + error);
        });
}
