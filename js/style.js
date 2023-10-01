document.getElementById('text-bold').addEventListener('click', function(){
    // console.log('clicked');
    const textArea = document.getElementById('text-area');
    textArea.style.fontWeight = 'bold';
})

// Italic
document.getElementById('text-italic').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    textArea.style.fontStyle = 'italic';
})

// Underline
document.getElementById('text-underline').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    textArea.style.textDecoration = 'underline';
})

// Align Left
document.getElementById('align-left').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'left';
})

// Align center
document.getElementById('align-center').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'center';
})

// Align right
document.getElementById('align-right').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'right';
})

// Align justify
document.getElementById('align-justify').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'justify';
})
