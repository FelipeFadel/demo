import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export function recorder() {
  //Importante tipar os estados pois sem isso o Vs enche o saco
  const [recording, setRecording] = useState<Audio.Recording | undefined>(); //Guarda o objeto de gravação, no caso a gravação em tempo real
  const [sound, setSound] = useState<Audio.Sound | null>(null); //Objeto de para reprodução do áudio e pause etc
  const [uri, setUri] = useState<string | null>(null); //Caminho do audió gravado
  const [permissionResponse, requestPermission] = Audio.usePermissions(); //Sabe o status da permissão e função para pedir permissão

  // Limpa o som quando o componente for desmontado
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function startRecording() {
    //Comeca a gravação!!!
    try {
      // Tem que ter permissão para gravar
      if (permissionResponse?.status !== "granted") {
        await requestPermission();
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true, //Permite gravação no iphonis
        playsInSilentModeIOS: true, //app pode gravar mesmo se o iphone estiver no modo silencioso
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY //Cria uma nova gravação
      );

      setRecording(recording); //guarda a nova gravação no estado
    } catch (error) {
      console.error("Erro ao iniciar gravação:", error);
    }
  }

  async function stopRecording() {
    //Para a gravação!!!
    try {
      if (!recording) return;

      await recording.stopAndUnloadAsync(); //Para a gravação e descarrega da memória
      await Audio.setAudioModeAsync({ allowsRecordingIOS: false });

      const uri = recording.getURI();
      setUri(uri); //Guarda o caminho do áudio gravado pra poder ver depois
      setRecording(undefined);
    } catch (error) {
      console.error("Erro ao parar gravação:", error);
    }
  }

  async function playSound() {
    //Solta a gravação pra ouvir!!!
    try {
      if (!uri) return; //Verifica se tem algo na uri
      const { sound } = await Audio.Sound.createAsync({ uri }); //Cria o objeto de som a partir do uri
      setSound(sound);
      await sound.playAsync(); //reproduz a sua demo rapaiz
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
    }
  }

  return {
    recording,
    uri,
    startRecording,
    stopRecording,
    playSound,
  };
}
