document.addEventListener("DOMContentLoaded", (ready) => {
    let datatypeSizes = {
        "char": 1,
        "short": 2,
        "int": 4,
        "long": 4,
        "long long": 8,
        "float": 4,
        "double": 8
    };

    let memberTag = `
        <div class="struct-member">
            <select name="dtype" class="form-select struct-member-dtype" aria-label="dtype">
                <option value="">datatype</option>
                <option value="char">char</option>
                <option value="short">short</option>
                <option value="int">int</option>
                <option value="long">long</option>
                <option value="long long">long long</option>
                <option value="float">float</option>
                <option value="double">double</option>
            </select>
            <input type="text" class="form-control struct-member-name" placeholder="e.g. wheels"
            autocomplete="off">
            <p class="struct-code">;</p>
        </div>`;

    let memTag = `
        <div class="memory-member">
            <div class="memory-member-element">
                <p class="memory-member-name"></p>
            </div>
            <div class="memory-member-element">
                <p class="memory-member-size"></p>
            </div>
        </div>`;

    let memBlock = `
        <div class="memory-member">
            <p class="memory-member-name"></p>
        </div>
        `;

    let memErrorTag = `
        <p id="memory-error">Compile failed. Make sure that the struct name, all datatypes and member names are provided.</p>
    `;

    document.querySelector("#compile-struct").addEventListener("click", (e) => {
        let memMembers = [];
        let memContainer = document.querySelector("#memory-container");
        let structName = document.querySelector("#struct-name").value;
        let structMembers = document.querySelectorAll(".struct-member");

        if (structName) {
            for (let i = 0; i < structMembers.length; i++) {
                let dtype = structMembers[i].querySelector(".struct-member-dtype").value;
                let name = structMembers[i].querySelector(".struct-member-name").value;

                if (dtype && name) {
                    memMembers.push({ "name": name, "dtype": dtype, "size": datatypeSizes[dtype] })
                }
                else {
                    memMembers = [];
                    memContainer.innerHTML = memErrorTag;
                    break;
                }
            }
        }
        else {
            memContainer.innerHTML = memErrorTag;
        }
        
        if (memMembers.length > 0) {

            memContainer.innerHTML = "";
            let totalBytes = 0;

            for (let i = 0; i < memMembers.length; i++) {

                for (let b = 0; b < memMembers[i]["size"]; b++) {

                    let memItem = $.parseHTML(memBlock);
                    
                    $(memItem).find(".memory-member-name").html(memMembers[i]["name"].slice(0, 2)+"<sub>"+(b+1)+"</sub>")
                    
                    $(memItem).attr("title", `${memMembers[i]["name"]} (${memMembers[i]["dtype"]}), byte #${b+1}`);
                    $(memItem).attr("class", `memory-member member-${i%3}`);

                    $("#memory-container").append(memItem);

                }

                totalBytes += memMembers[i]["size"];
            }

            document.querySelector("#memory-title").innerHTML = `Memory View for <code>${structName}</code> (total ${totalBytes} bytes)`
        }
    });

    document.querySelector("#add-member").addEventListener("click", (e) => {
        let memberItem = $.parseHTML(memberTag);
        $("#struct-content").append(memberItem);
    });
})