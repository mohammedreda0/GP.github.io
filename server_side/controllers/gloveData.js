import gloveData from "../models/gloveDataReq.js";

export const getMPU_1_data = async (req, res) => {
    try {

        var data = [];

        await gloveData.ref('/mpu_1/x_angle').once('value', (snapshot) => {
            data.push(snapshot.val());
        });

        await gloveData.ref('/mpu_1/y_angle').once('value', (snapshot) => {
            data.push(snapshot.val());
        });

        await gloveData.ref('/mpu_1/z_angle').once('value', (snapshot) => {
            data.push(snapshot.val());
        });

        console.log("data = ",data);

        res.status(200).json(data);
        
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMPU_2_data = async (req, res) => {
    try {
        
        var data = [];

        await gloveData.ref('/mpu_2/x_angle').once('value', (snapshot) => {
            data.push(snapshot.val());
        });

        await gloveData.ref('/mpu_2/y_angle').once('value', (snapshot) => {
            data.push(snapshot.val());
        });

        await gloveData.ref('/mpu_2/z_angle').once('value', (snapshot) => {
            data.push(snapshot.val());
        });

        console.log("data = ",data);
        res.status(200).json(data);

    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFingers_data = async (req, res) => {
    try {

        var data = [];

        for (var i = 1; i <= 5; i++) {
            await gloveData.ref(`/finger_${i}`).once('value', (snapshot) => {
                data.push(snapshot.val());
            });
        }
        
        console.log("data = ",data);
        res.status(200).json(data);

    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}