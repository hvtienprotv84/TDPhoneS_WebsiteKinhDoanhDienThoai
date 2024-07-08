class LocalStorage {
    constructor(key) { this.key = key; }

    modify(index, value) {
        let values = this.values;
        index === -1
            ? values.push(value)
            : value
                ? (values[index] = value)
                : values.splice(index, 1);
        localStorage.setItem(this.key, JSON.stringify(values));
    }

    removeAll() { localStorage.removeItem(this.key); }
    findIndex(key, value) { return this.values.findIndex(key && value ? obj => obj[key] === value : item => item === key); }
    move(index, direction) {
        const values = this.values;
        const newIndex = (index + direction + values.length) % values.length;
        const [item] = values.splice(index, 1);
        values.splice(newIndex, 0, item);
        localStorage.setItem(this.key, JSON.stringify(values));
    }
    get values() { return JSON.parse(localStorage.getItem(this.key)) || []; }
}

const notesLS = new LocalStorage('notes');

const saveBUTTON = document.getElementById('saveBUTTON');
const notesDIV = document.getElementById('notes');
const notesH1 = document.getElementById('notesH');
const notification = document.querySelector("#notification");

function alertthis(alerttext, success = true) {
    let removefirst = document.getElementById("removethis");
    if (document.body.contains(removefirst)) { removefirst.remove(); }
    let elem = document.createElement('div');
    elem.style.cssText = 'z-index: 99999 !important; position: fixed !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%);background-color: rgb(17, 19, 26) !important; color: rgb(135, 152, 165) !important; padding: 5px 10px !important;box-shadow: rgba(0, 0, 0, 0.52) 1px 2px 8px !important;border-radius: 8px !important;display: flex!important;justify-content: center!important;align-items: center!important;gap: 8px!important;'
    elem.setAttribute("id", "removethis");
    if (success) { var ct = `M14.1 27.2l7.1 7.2 16.7-16.8`; }
    else { ct = `M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8`; var cl = `cross`; }
    elem.innerHTML = `${alerttext}<svg class="checkmark ${cl}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle><path class="checkmark__check" fill="none" d="${ct}"></path></svg>`;
    document.body.appendChild(elem);
    setTimeout(function () { elem.remove(); }, 1650);
}

function generateID() {
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(36);
}

function retINDEX(id) {
    let index = notesLS.findIndex('id', id);
    return index
}

saveBUTTON.addEventListener('click', (e) => {
    e.preventDefault();
    let noteINPUT = document.getElementById('noteINPUT');
    let id = noteINPUT.dataset.id || generateID();
    let note = noteINPUT.value;
    if (!note) { return }
    let index = retINDEX(id);
    let data = { id, note }
    notesLS.modify(index, data)
    noteINPUT.value = '';
    noteINPUT.removeAttribute('data-id')
    alertthis('Saved!')
    appendNotes()
});

function appendNotes() {
    notesDIV.innerHTML = '';
    notesH1.innerHTML = '';
    notesH1.innerHTML = `<span>Notes</span><small>${notesLS.values.length}</small>`;
    notesLS.values.forEach((notes, i) => {
        let { id, note } = notes;
        let div = `<div class="note">
    <span class="id"><span class="index">${++i}</span><span class="copy" data-id="${id}" title="copy">?</span></span>
    <span class="noteContent">${note}</span>
    <span class="buttons">
        <span class="hide edit"data-id="${id}" title="edit">?</span>
        <span class="hide move up" data-wh="-1" data-id="${id}" title="move up">?</span>
        <span class="hide move down" data-wh="1" data-id="${id}" title="move down">?</span>
        <span class="delete" data-id="${id}" title="remove">&times;</span>
    </span>
</div>`
        notesDIV.innerHTML += div
    });
}
appendNotes()

document.addEventListener('click', function (e) {
    let remove = e.target.closest('.delete');
    let move = e.target.closest('.move');
    let edit = e.target.closest('.edit');
    let copy = e.target.closest('.copy');
    if (edit) {
        let id = edit.dataset.id
        let index = retINDEX(id);
        let note = notesLS.values[index].note;
        let noteINPUT = document.getElementById('noteINPUT');
        noteINPUT.value = note;
        noteINPUT.dataset.id = id
    }
    if (remove) {
        let id = remove.dataset.id
        let index = retINDEX(id);
        notesLS.modify(index)
        alertthis('Removed!', false)
        appendNotes()
    }
    if (move) {
        let dataWH = Number(move.dataset.wh)
        let id = move.dataset.id
        let index = retINDEX(id);
        notesLS.move(index, dataWH)
        appendNotes()
    }
    if (copy) {
        let id = copy.dataset.id
        let index = retINDEX(id);
        let note = notesLS.values[index].note;
        navigator.clipboard.writeText(note);
        alertthis('Copied!')
    }
});