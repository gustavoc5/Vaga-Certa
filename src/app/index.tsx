import { Redirect } from "expo-router";
import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { ActivityIndicator } from "react-native";

const Index = () => {  
    const { session, loading } = useAuth();
    if (loading) {
        return <ActivityIndicator />;
    }
    if (!session) {
        return <Redirect href={'/entrar'} />;
    }
    return <Redirect href={'/vagas'} />;
};
export default Index;

