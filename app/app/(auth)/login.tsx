import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



  return (
    <View className="bg-black w-full h-screen p-4">
        <View className="flex items-center h-44 p-8">
            <Image className="w-20 h-20" source={require('../../assets/images/logo.png')}/>
        </View>
        <View className="flex gap-10">
            <Text className="text-white text-3xl font-montserrat-bold text-center">Login</Text>
            <View className="flex gap-2">
                <Text className="text-white font-montserrat">Email</Text>
                <TextInput 
                placeholder="Digite seu email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                className="border border-gray-50 rounded-md p-4 placeholder:text-gray-500 placeholder:font-montserrat-semibold text-white"
                />
            </View>

            <View className="flex gap-2">
                <Text className="text-white font-montserrat">Senha</Text>
                <TextInput 
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                className="border border-gray-50 rounded-md p-4 placeholder:text-gray-500 placeholder:font-montserrat-semibold text-white"
                />
            </View>

            <TouchableOpacity className="bg-white p-4 rounded flex items-center">
                <Text className="font-montserrat-bold">Entrar</Text>
            </TouchableOpacity>

            <Link href={'/register'} className="text-white font-montserrat underline">Não tem uma conta? Registrar</Link>
        </View>
    </View>
  )
}

export default Login;

