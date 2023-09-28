import React, { useEffect, useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import { Camera } from "expo-camera";
import { StyleSheet } from "react-native";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import app from '../firebaseConfig';

export default function Fotos() {
    const [temPermissao, setTemPermissao] = useState(null);
    const [camera, setCamera] = useState(null);
    const [uri, setUri] = useState(null);

    useEffect(() => {
        const getCameraPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setTemPermissao(status === "granted");
        };
        getCameraPermission();
    }, []);

    const tirarFoto = async () => {
        if (camera) {
            const picture = await camera.takePictureAsync();
            const { uri } = picture;
            setUri(uri);

            const foto = await fetch(uri);
            const fotoBlob = await foto.blob();
            const storage = getStorage(app)
            const storageRef = ref(storage, "fotoEvento.jpg")
            uploadBytes(storageRef, fotoBlob)
        }
    };

    if (temPermissao === null) {
        return <Text>Verificando permissão da câmera.</Text>;
    }

    if (temPermissao === false) {
        return <Text>A permissão da câmera foi negada.</Text>;
    }

    return (
        <View style={styles.container}>
            {!uri && (
                <Camera
                    type={Camera.Constants.Type.back}
                    ref={(ref) => setCamera(ref)}
                    style={styles.containerCamera}
                />
            )}
            {uri && <Image source={{ uri }} style={styles.fotoCamera} />}
            <Pressable onPress={tirarFoto} style={styles.btnTirarFoto}>
                <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>Tirar foto</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerCamera: {
        flex: 1,
    },
    fotoCamera: {
        flex: 1,
    },
    btnTirarFoto: {
        height: 50,
        width: '100%',
        justifyContent: 'center'
    }
});
