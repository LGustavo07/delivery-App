import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string;
    cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image
                    className="h-6 w-32"
                    source={require("@/assets/logo.png")}
                />

                <Text className="text-white text-xl font-heading">{title}</Text>
            </View>

            {cartQuantityItems > 0 && (
                <Link href="/cart" asChild>
                    <TouchableOpacity className="relative" activeOpacity={0.7}>
                        <View className="top-2 z-10 -right-3.5 bg-lime-300 w-4 h-4 rounded-full items-center justify-center flex">
                            <Text className="text-slate-900 text-xs font-bold">
                                {cartQuantityItems}
                            </Text>
                        </View>
                        <Feather
                            color={colors.white}
                            name="shopping-bag"
                            size={24}
                        />
                    </TouchableOpacity>
                </Link>
            )}
        </View>
    );
}
