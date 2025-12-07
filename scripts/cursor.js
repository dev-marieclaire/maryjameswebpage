// cursor.js

// This is currently disabled due to uncomplete functionality implementation.
// I will enable it in the foreseable future.

function control_border_brightness()
{
    document.body.onpointermove = event =>
    {
        const { clientX, clientY } = event;

        cursor_bg.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`
            },
            {
                duration: 100,
                fill: "forwards"
            }
        )

        const x_dist = (clientX-content_x);
        const y_dist = (clientY-content_y)*aspect_ratio; // this avoids getting more oppacity in the X axis than in the Y

        const hip_size = Math.sqrt(x_dist*x_dist+y_dist*y_dist);

        var alpha = ((hip_size*100)/(content_y/2)-100); // gets the percentage of distance to get the desired opacity

        if (x_dist >= content_rect.width/2 || x_dist <= (content_rect.width/2)*-1 ||
            y_dist >= content_rect.height/2 || y_dist <= (content_rect.height/2)*-1)
            // content.style.borderColor = 'rgba(139, 104, 107, 0.48)';
            content.style.borderColor = 'rgba(244, 244, 244, 0.48)';
        else if (alpha >= 120 && alpha <= 240)
        content.animate(
            // { borderColor: 'rgba(139, 104, 107, '+ alpha/300 +')' },
            { borderColor: 'rgba(244, 244, 244, '+ alpha/600 +')' },
            { duration: 5, fill: "forwards" }
        )

        // console.log(alpha.toString());
    }
}

window.onload = function()
{
    const cursor_bg = document.getElementById("cursor_bg");
    
    var content = document.getElementById("content");
    var content_rect = content.getBoundingClientRect();

    content.style.borderColor = 'rgba(139, 104, 107, 0.48)';

    var angle = getComputedStyle(content).getPropertyValue("--angle");

    onresize = (event) => {
        content = document.getElementById("content");
    };

    const content_x = content_rect.left+(content_rect.width/2);
    const content_y = content_rect.top+(content_rect.height/2);
    const aspect_ratio = content_rect.width/content_rect.height;

    control_border_brightness();
}
