function deviceInfo_connect() {

    navigator.bluetooth.requestDevice
        ({
            acceptAllDevices: true
            filters: [{
                services: ['b42f7e37-b0ab-d1a3-1f76-2137c7b15671']
         }]
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
