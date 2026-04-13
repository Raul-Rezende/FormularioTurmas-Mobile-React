import { Stack } from "expo-router";

export default function Layout(){
    return(
            <Stack
                screenOptions={{
                    headerStyle:{
                    backgroundColor:"#121212"
                },
                headerTintColor:"#fff"
                }}
                >
                    <Stack.Screen name="./App.tsx" options={{title:"Cadastro"}}/>
                    <Stack.Screen name="./TelaPerfil.tsx" options={{title:"Perfil"}}/>
                </Stack>
    )
}