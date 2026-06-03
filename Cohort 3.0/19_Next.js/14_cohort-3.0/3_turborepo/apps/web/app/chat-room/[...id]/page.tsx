import TextInput from "@repo/ui/input-text";

interface ChatRoomPageDTO {
    params: Promise<{
        id: string
    }>
}

export default async function ChatRoomPage(props: ChatRoomPageDTO) {

    const params = await props.params;
    const [id] = params.id; // id is an array due to ... in route folder, so destructure it
    console.log(id);
    const idAsNo = Number(id);

    if (isNaN(idAsNo) || idAsNo <= 0 || idAsNo > 5) throw new Error("Invalid url")


    return <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", alignItems: "center", justifyItems: "", marginTop: 40 }}>

        <p>  hi from chat room</p>
        <div>
            <TextInput placeHolder="Message" />
        </div>
    </div>

}