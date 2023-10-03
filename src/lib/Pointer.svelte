<script>
    let mousePosition = {x: 0, y: 0}

</script>

<div on:pointermove={(e) => mousePosition = {x: e.clientX, y: e.clientY}}>
    <p>Mouse position is at: {mousePosition.x}, {mousePosition.y}</p>
</div>

<style>
    div{
        position: fixed;
        min-height: 100vh;
        width: 100%;
        left: 0;
        top: 0;
        z-index: -1;
    }
</style>