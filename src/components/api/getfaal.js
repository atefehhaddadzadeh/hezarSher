import { useEffect, useState } from "react";
import axios from "axios";
import hafezPoems from "../../assets/hafez.json";
function Getfaal() {
    const [title, settitle] = useState("");
    const [poem, setpoem] = useState([]);
    const [voice, setvoice] = useState("");
    const [Interpretation, setinterpretation] = useState("");
    const changepoem = [];

    useEffect(() => {
        axios
            .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(({data}) => {
                const { title, verses, recitations } = data;
                settitle(title);
                setvoice(recitations[0].mp3Url);
                verses.forEach((verse, index) => {
                    if (index % 2 === 0) {
                 return  changepoem.push([verse.text]);
                    }
                    return  changepoem[changepoem.length - 1].push(verse.text);
                });
              const poem = changepoem;
              setpoem(poem);

                const SHER = hafezPoems.find((each) => {
                    for (let i = 0; i < poem.length; i++) {
                        for (let j = 0; j < poem[i].length; j++) {
                            if (each.poem.includes(poem[i][j])) {
                                return true;
                            }
                        }
                    }
                });
                const Interpretation = SHER.interpretation;
                setinterpretation(Interpretation);

            
            });
    }, []);

    return { title, poem, voice, Interpretation };
}

export default Getfaal;
