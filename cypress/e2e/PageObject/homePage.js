export class homePage{
    elements = {
        usernameInput: ()=> cy.get('#firstName'),
        lastName: ()=> cy.get('#lastName'),
        email:()=> cy.get('#userEmail'),
        userNumber:()=>cy.get('#userNumber'),
        subjects:() =>cy.get('.subjects-auto-complete__value-container'),
        loginBtn:()=> cy.get('#loginBtn'),
        male:()=> cy.get('input[value="Male"]'),
        female:()=>cy.get('input[value="Female"]'),
        other:()=>cy.get('input[value="Other"]'),
        sports:()=>cy.get("#hobbies-checkbox-1"),
        reading:()=>cy.get("#hobbies-checkbox-2"),
        music:()=>cy.get("#hobbies-checkbox-3")


    }

    typeUserName(username){
        this.elements.usernameInput().type(username)
    }
    
    typeEmail(email){
        this.elements.email().type(email)
    }

    typeMobile(number){
        this.elements.userNumber().type(number)
    }

    typeSubjects(subjects){
        this.elements.subjects().type(subjects)
    }

    selectGender(gender){
        if(gender === "Male"){
            this.elements.male().select()
        }
        if(gender === "Female"){
            this.elements.female().select()
        }
        if(gender === "Other"){
            this.elements.other().select()
        }
    
    }

    selectHobbies(hobbies){
        if(hobbies === "Sports"){
            this.elements.sports().select()
        }
        if(hobbies === "Reading"){
            this.elements.reading().select()
        }
        if(hobbies === "Music"){
            this.elements.music().select()
        }
    }

    clickLogin(){
        this.elements.loginBtn().click()
    }
}