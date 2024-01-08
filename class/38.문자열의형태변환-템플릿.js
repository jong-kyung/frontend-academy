const userName = 'Kim code';
const bolder = text => `<b>${text}</b>`;


console.log(`HI~ ${userName}`);

console.log(`HI~ ${bolder(userName)}`);

// Tagged Template
function div(strings, ...fns) { // fns 에는 ${}가 가변인자로 들어감
    const flat = s => s.split('\n').join('');

    console.log(strings)
    console.log(...fns)

    return function (props) {
        return `<div style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}"</div>`
    }
}

const Div = div`
    font-size: 20px;
    color: ${props => props.active ? 'white' : 'gray'};
    border: none;
`;

console.log(Div({ active: false }))