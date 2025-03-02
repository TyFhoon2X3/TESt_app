describe("Tracalorie - Meal Tracking", () => {
    it("go to addCustommer and add costomer", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager");
        cy.get('[ng-class="btnClass1"]').click();
        const array = [
            { name: "Ardee", Lastname: "Arwaehama", PostCode: 90250 },
            { name: "Vasavat", Lastname: "kewpisai", PostCode: 90250 },
            { name: "lukmee", Lastname: "sutanieiei", PostCode: 90250 },
            { name: "Lukma", Lastname: "mejin", PostCode: 90250 },
            { name: "mejai", Lastname: "maikrup", PostCode: 90250 }

        ];
        //ประกาสตัวแปร์ด้วยการใช้ array ที่ประกอบไปได้ name lastname postcode
        let i;
        for (i = 0; i < array.length; i++) {
            const fhoon = array[i];


            cy.get(":nth-child(1) > .form-control").type(fhoon.name);//ใช้array การกรอกข้อมูล
            cy.get(":nth-child(2) > .form-control").type(fhoon.Lastname);//ใช้array การกรอกข้อมูล
            cy.get(":nth-child(3) > .form-control").type(fhoon.PostCode);//ใช้array การกรอกข้อมูล

            cy.get('form.ng-dirty > .btn').click();


        }


    });
    it("go to Check Costomer", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager");
        cy.get('[ng-class="btnClass1"]').click();
        const array = [
            { name: "Ardee", Lastname: "Arwaehama", PostCode: 90250 },
            { name: "Vasavat", Lastname: "kewpisai", PostCode: 90250 },
            { name: "lukmee", Lastname: "sutanieiei", PostCode: 90250 },
            { name: "Lukma", Lastname: "mejin", PostCode: 90250 },
            { name: "mejai", Lastname: "maikrup", PostCode: 90250 }

        ];

        let i;
        for (i = 0; i < array.length; i++) {
            const fhoon = array[i];


            cy.get(":nth-child(1) > .form-control").type(fhoon.name);
            cy.get(":nth-child(2) > .form-control").type(fhoon.Lastname);
            cy.get(":nth-child(3) > .form-control").type(fhoon.PostCode);

            cy.get('form.ng-dirty > .btn').click();


        }

        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(3000); 

      
        for (let i = 0; i < array.length; i++) {
            const fhoon = array[i];
            cy.get('.form-control').type(fhoon.name);
            cy.wait(3000); 
            cy.get('tbody > .ng-scope > :nth-child(1)').should("have.text",fhoon.name);
            cy.get('.form-control').clear();
        }

    });


    it("delete  Costomer", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager");
        cy.get('[ng-class="btnClass1"]').click();
        const array = [
            { name: "Ardee", Lastname: "Arwaehama", PostCode: 90250 },
            { name: "Vasavat", Lastname: "kewpisai", PostCode: 90250 },
            { name: "lukmee", Lastname: "sutanieiei", PostCode: 90250 },
            { name: "Lukma", Lastname: "mejin", PostCode: 90250 },
            { name: "mejai", Lastname: "maikrup", PostCode: 90250 }

        ];

        let i;
        for (i = 0; i < array.length; i++) {
            const fhoon = array[i];


            cy.get(":nth-child(1) > .form-control").type(fhoon.name);
            cy.get(":nth-child(2) > .form-control").type(fhoon.Lastname);
            cy.get(":nth-child(3) > .form-control").type(fhoon.PostCode);

            cy.get('form.ng-dirty > .btn').click();


        }

        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(3000);

        for (let index = 0; index < 10; index++) {
            cy.get(':nth-child(1) > :nth-child(5) > button').click()
        }

    });
    it.only("Open Account", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager");
        cy.get('[ng-class="btnClass1"]').click();
    
        const customers = [
            { name: "Ardee", Lastname: "Arwaehama", PostCode: 90250 },
            { name: "Vasavat", Lastname: "kewpisai", PostCode: 90250 },
            { name: "lukmee", Lastname: "sutanieiei", PostCode: 90250 },
            { name: "Lukma", Lastname: "mejin", PostCode: 90250 },
            { name: "mejai", Lastname: "maikrup", PostCode: 90250 }
        ];
    
        // เพิ่มลูกค้าทั้งหมด
        for (let i = 0; i < customers.length; i++) {
            cy.get(":nth-child(1) > .form-control").type(customers[i].name);
            cy.get(":nth-child(2) > .form-control").type(customers[i].Lastname);
            cy.get(":nth-child(3) > .form-control").type(customers[i].PostCode.toString());
            cy.get('form.ng-dirty > .btn').click();
        }
    
        // ไปที่หน้า "Open Account"
        cy.get('[ng-class="btnClass2"]').click();
    
        // เปิดบัญชีให้ลูกค้าทุกคน
        for (let i = 0; i < customers.length; i++) {
            cy.get('#userSelect').select(`${customers[i].name} ${customers[i].Lastname}`);
            cy.get('#currency').select('Dollar');
            cy.get('form.ng-dirty > button').click();
        }
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(3000); 

      
        for (let l = 0; l < customers.length; l++) {
            const fhoon = customers[l];
            cy.get('.form-control').type(fhoon.name);
            cy.wait(3000); 
            cy.get('tbody > .ng-scope > :nth-child(1)').should("have.text",fhoon.name);
            cy.get('.form-control').clear();
        }
    });
    



});
