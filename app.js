
const url = 'https://randomuser.me/api/?results=10'
// Dom 
const navButtons = document.querySelectorAll('.nav-buttons a')
const section = document.querySelector('.section .section2')
const input = document.querySelector('input')



function getRandom() {
    fetch(url)
        .then((response) => response.json())
        .then(function (data) {
            console.log(data.results);


            data.results.forEach(user => {
                section.innerHTML += `
                <section class="section2">
                    <div class="content-section2">
                        <div class="card-section2">
                            <div class="img-content">
                                <img src="${user.picture.large}" alt="">
                            </div>
                            <div class="text-content">
                                <div class="name">
                                    <i class="bi bi-person-circle"></i>
                                    <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                                </div>
                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>${user.email}</h4>
                                </div>
                                <div class="age">
                                    <i class="bi bi-calendar2-date-fill"></i>
                                    <h4>${user.cell}</h4>
                                </div>
                                <div class="local">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <h4>${user.location.city}, ${user.location.state}</h4>
                                </div>
                                <div class="number-phone">
                                    <i class="bi bi-telephone"></i>
                                    <h4>${user.phone}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
            });

        })
        
        
}


getRandom();



