import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button } from "react-native-paper";
import { styles } from './MejorasTomarFotoScreen.styles';
import { Layout } from '../../../layouts';

export function MejorasTomarFotoScreen(props) {

    const {
        route: { params },
      } = props;

      const id = params?.id;   

      const [facing, setFacing] = useState('back');
      const [permission, requestPermission] = useCameraPermissions();

    const cameraRef = useRef(null);

    const [ photo, setPhoto ] = useState(null);
    
      if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container2}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button
                mode="contained"
                style={styles.button}
                onPress={requestPermission}
            >
                grant permission
            </Button>
          </View>
        );
      }
    
      function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
      }

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const foto = await cameraRef.current.takePictureAsync();
                setPhoto(foto.uri);
            } catch (error) {
                console.error("Error al tomar la foto:", error);
            }
        }
    };

  return (
    <Layout.Basic>
    <View>
      <Text>MejorasTomarFotoScreen</Text>
      <View style={styles.container3}>  
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Cambiar Camara</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      </View>  
        <Button
            mode="contained"
            style={styles.btnSubmit}
            onPress={takePicture}
        >
            Tomar Foto
        </Button>  

    { photo ? 
    <Image source={{ uri: photo }} style={{ width: 250, height: 250 }} />
    : "" }
    </View>
    </Layout.Basic>
  )
}