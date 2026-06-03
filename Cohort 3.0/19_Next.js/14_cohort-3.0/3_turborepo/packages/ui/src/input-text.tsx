

export default function TextInput({ placeHolder }: { placeHolder: string }) {

    return <input type="text"
        name="roomId"
        placeholder={placeHolder ?? "Enter your data"}
        style={{
            padding: 4,
            paddingLeft: 14,
        }}
    />
}