import promptSync from 'prompt-sync'
const prompt =  promptSync({ sigint: true });
let employee = {};


        function Employee (fistName, lastName, startDate) {
            this.fistName = fistName
            this.lastName = lastName
            this.startDate = startDate
        }




        function askString (message) {
            let value;

            do {
                value = prompt (message);
            } while (value === '' || value === null);
            return value
        }

        function employeeData () {
            const fistName = askString ('Enter fist name:')
            const lastName = askString ('Enter last name:')
            const startDate = askString ('Enter start date(MM/DD/YYYY):')
        }

   employeeData()

   