document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("music");
    const button = document.getElementById("btn");
    const messageBox = document.getElementById("message");

    const messages = [
        "Hey kuya Chan😝",
        "a.k.a alien????",
        "",
        "now, baby🙂‍↕️",
        "Grabe, I was thinking about us…",
        "and honestly parang fake yung timeline natin",
        "",
        "Like… 8 years ago me would NOT believe this",
        "",
        "Ikaw yung ultimate crush ko dati",
        "final boss level",
        "out of my league sobra",
        "",
        "Tapos ako nasa 'stalking is a crime, right?' era",
        "",
        "Pero nag confess pa rin ako nung March 2018",
        "which… questionable behavior",
        "",
        "Akala ko hanggang admire from afar lang ako",
        "background character lang ganon",
        "",
        "Then after years ng random catch-ups",
        "and NPC interactions",
        "biglang tayo na",
        "",
        "So now iniisip ko",
        "baka totoo yung red string theory",
        "",
        "Kasi what do you mean",
        "same guy I liked 8 years ago",
        "is the same person I love now",
        "",
        "Parang ang intentional naman masyado",
        "",
        "Or baka I just committed to the bit for almost a decade",
        "and it worked",
        "",
        "Honestly… both are valid",
        "",
        "From 'notice me please'",
        "to 'goodnight, I love you'",
        "",
        "From 'he’s out of my league'",
        "to 'he’s mine now'",
        "",
        "still not fully processed",
        "",
        "Anyway",
        "",
        "HAPPY 2nd MONTHSARY, Babyq na super pogi!!",
        "",
        "thanks for staying",
        "for being patient",
        "and for making something that felt impossible before",
        "feel real now",
        "",
        "If this is the red string doing its job",
        "then ang galing niya",
        "",
        "Babe, I just want you to know how much I appreciate you.",
        "For all the little and big things you do for me,",
        "For always taking care of me,", // Added missing comma
        "For being the glue when I feel my life is falling apart",
        "",
        "For being my cushion whenever I'm struck by hard moments in life.",
        "",
        "You've witnessed all my moods,",
        "my struggles with regulating emotions,",
        "my mood swings, and my silent battles,",
        "yet you cheered me on.",
        "",
        "You make me more confident every single day,",
        "and you always make me feel beautiful.",
        "",
        "Thank you for your patience,",
        "for your positivity,",
        "and for cheering me up constantly.",
        "",
        "I love you more than words could ever describe.",
        "I hope to see you soon.",
        "",
        "I want to live my life with you ❤️",
        "",
        "",
        "I love you ❤️"
    ];

    let index = 0;

    button.addEventListener("click", function () {
        // Play music on first click
        if (music && music.paused) {
            music.play().catch(err => console.log("Music blocked until user interacts"));
        }

        if (index < messages.length) {
            // Smoothly swap text
            messageBox.style.opacity = "0";
            
            setTimeout(() => {
                messageBox.textContent = messages[index] || "\u00A0";
                messageBox.style.opacity = "1";
                index++;
                
                // Keep the button relevant
                button.textContent = index === messages.length ? "End 💌" : "Next 💖";
            }, 200);

            // Floating hearts - reduced for mobile performance
            for (let i = 0; i < 2; i++) {
                setTimeout(createHeart, i * 300);
            }
        } else {
            button.style.display = "none"; // Hide button at the end
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "❤️";
        
        const container = document.querySelector(".card");
        if (!container) return;

        const size = Math.random() * 15 + 10;
        heart.style.fontSize = size + "px";
        heart.style.left = Math.random() * 80 + 10 + "%"; // Uses % for better mobile scaling
        
        // CSS Variables for the animation
        heart.style.setProperty("--x", (Math.random() * 100 - 50) + "px");
        
        container.appendChild(heart);

        // Remove after animation finishes
        setTimeout(() => heart.remove(), 3000);
    }

    // --- Optimized Canvas Background ---
    const canvas = document.getElementById("bg");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let w, h;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resize);
        resize();

        const dots = Array.from({ length: 40 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3
        }));

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
            dots.forEach(d => {
                d.x = (d.x + d.vx + w) % w;
                d.y = (d.y + d.vy + h) % h;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }
        draw();
    }
});
