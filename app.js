async function loadCards(){

    const res = await fetch('recipes.json');
    const recipes = await res.json();

    const container=document.getElementById('cards');

    recipes.forEach(r=>{

        const card=document.createElement('div');
        card.className='card';

        card.innerHTML=`

        <div class="card-inner">

            <div class="face">

                <div class="frame"></div>

                <div class="corner tl"></div>
                <div class="corner tr"></div>
                <div class="corner bl"></div>
                <div class="corner br"></div>

                <div class="content">

                    <div class="header">
                        <span>${r.id}</span>
                        <span class="cat">${r.category}</span>
                    </div>

                    <div class="scale">
                        <small>SWEET</small>
                        <div class="bar">
                            <div class="marker"
                                 style="left:${r.sweetness}%">
                                 3
                            </div>
                        </div>
                    </div>

                    <h1 class="title">${r.name}</h1>

                    <div class="section">
                        <div class="badge">1</div>

                        <h4>FLAVOR PROFILE</h4>
                        <p>${r.flavor}</p>
                    </div>

                    <div class="section">
                        <div class="badge">2</div>

                        <h4>HISTORY</h4>
                        <p>${r.history}</p>
                    </div>

                    <img class="drink" src="${r.image}">
                </div>

            </div>

            <div class="face back">

                <div class="frame"></div>

                <div class="corner tl"></div>
                <div class="corner tr"></div>
                <div class="corner bl"></div>
                <div class="corner br"></div>

                <div class="content">

                    <div class="header">
                        <span>${r.id}</span>
                        <span class="cat">${r.category}</span>
                    </div>

                    <div class="columns">

                        <div class="col">
                            <h3>INGREDIENTS</h3>

                            <ul>
                                ${r.ingredients.map(i=>`<li>${i}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="col">
                            <h3>INSTRUCTIONS</h3>

                            <ul>
                                ${r.instructions.map(i=>`<li>${i}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="col">
                            <h3>TOOLS</h3>

                            <ul>
                                ${r.tools.map(i=>`<li>${i}</li>`).join('')}
                            </ul>
                        </div>

                    </div>

                    <div class="fact">
                        <strong>FUN FACT:</strong>
                        ${r.fact}
                    </div>

                </div>

            </div>

        </div>
        `;

        card.onclick=()=>card.classList.toggle('flipped');

        container.appendChild(card);

    });
}

loadCards();