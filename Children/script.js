document.getElementById("giftForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const item = document.getElementById("item").value;

    document.getElementById("confirmName").innerText = name;
    document.getElementById("confirmItem").innerText = item;

    document.getElementById("giftForm").reset(); 
    document.getElementById("giftForm").classList.add("hidden");
    document.getElementById("confirmationMessage").classList.remove("hidden");
});
function newOrder() {
    location.reload();
}
function createSnowflakes() {
    const snowflakeCount = 100; 
    const snowflakeContainer = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        snowflake.innerText = '❄'; 
        snowflake.style.left = Math.random() * 100 + 'vw'; 
        snowflake.style.top = Math.random() * -100 + 'vh';
        snowflake.style.fontSize = Math.random() * 1.5 + 1 + 'em'; 
        snowflake.style.animationDuration = Math.random() * 5  + 5 + 's'; 
        snowflake.style.animationDelay = Math.random() * 0.5 + 's'; 

        snowflakeContainer.appendChild(snowflake);
    }
}

createSnowflakes();
