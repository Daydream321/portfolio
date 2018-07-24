class Calendar{
    constructor(container){
        this.container = container;
        this.today = new Date();
    }
    render(){
        this.container.innerHTML = '';

        // render title
        this.renderTitle();
        
        // render days
        this.renderDays();
    }
    renderTitle(){
        let title = document.createElement('div');
        this.container.appendChild(title);

        let prevBtn = document.createElement('button');
        prevBtn.innerText = '<';
        title.appendChild(prevBtn);
        prevBtn.addEventListener('click', function(){
            this.today.setMonth(this.today.getMonth()-1);
            this.render();
        }.bind(this));

        let header = document.createElement('div');
        header.innerText = this.today.toDateString();
        title.appendChild(header);

        let nextBtn = document.createElement('button');
        nextBtn.innerText = '>';
        title.appendChild(nextBtn);
        nextBtn.addEventListener('click', function(){
            this.today.setMonth(this.today.getMonth()+1);
            this.render();
        }.bind(this));
    }
    renderDays(){
        for(let i = 0; i < this.getNumDays; i++){
            let day = document.createElement('div');
            this.container.appendChild(day);
        }
        for(let i = 0; i < this.getNumDays(); i++){
            let day = document.createElement('div');
            day.innerText = i+1;
            if(i+1 === this.today.getDate()){
                day.classList.add('selected')
            }
            day.addEventListener('click', () => {
                this.today.setDate(i+1);
                this.render(); 
            });
            this.container.appendChild(day);
        }
    }
    getNumDays(){
        let clone = new Date(this.today);
        clone.setDate(1);
        clone.setMonth(clone.getMonth()+1);
        clone.setDate(0);
        return clone.getDate();
    }
}