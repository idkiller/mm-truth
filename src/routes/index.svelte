

<div class="container">
    <h1 class="title">Liar Game</h1>
    <button class="button" on:click={() => location.href='/master'} >New Game</button>
</div>

<style>
.container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
}
.title {
    font-size: 8vmax;
    margin: 10vh 0 40vh 0;
}
.button {
    border:0;
    background-color: transparent;
    color: var(--font-button-color);
    font-size: 4vmax;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: #fff 0 1px 2px;
}

.title {
    position: relative;
    line-height: 100%;
    animation: glitch 3s cubic-bezier(.46,.29,0,1.24) infinite backwards 120ms;
}
.title::after {
    content: 'LIAR GAME';
    position: absolute;
    top:0;
    left:0;
    clip-path: inset(40% 0 33%);
    animation: glitch-reverse 3s cubic-bezier(.46,.29,0,1.24) infinite backwards 120ms;
}

@keyframes glitch {
    0% {
        transform: translateX(-5px);
        text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    }
    2% {
        transform: translateX(5px);
        text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%, 100% {
        transform: none;
        text-shadow: none;
    }
}

@keyframes glitch-reverse {
    0% {
        transform: translateX(5px);
    }
    2% {
        transform: translateX(-5px);
    }
    4%, 100% {
        transform: none;
        text-shadow: none;
    }
}
</style>