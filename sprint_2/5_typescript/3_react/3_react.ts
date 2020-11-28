type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
    "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
    "input"
) as HTMLInputElement;

if (!text || !input) {
    throw new Error("нет полей");
}

const data: {[key: string]: unknown} = {
    title: "",
};


Object.defineProperty(data, 'title', {
    set (value){
        text.innerHTML = value
    }
});

input.addEventListener('keyup', () =>{
    data.title = input.value
})
