import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

// document.addEventListener(
//     "click",  // This is the type of event
//     (clickEvent) => {
       
//         const itemClicked = clickEvent.target

//         if (itemClicked.id.startsWith("employee")) {

//             const [,employeeId] = itemClicked.id.split("--")

//             for (const employee of employees) {
//                 if (employee.id === parseInt(employeeId)) {
//                     //window alert needs to say ${employee.name} has had {{blank number}} of sales
//                     //will need a way to find total number of sales for each empl
//                     window.alert(`${employee.name} has sold $${employee.email}.`)
//                 }
//             }
//          }
//     }
// )

document.addEventListener(
    "click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("employee")) {
            
            let employeeOrders = []
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                let orderCount = ""
                for (const order of orders) {
                    if (employee.id === order.employeeId) {
                        employeeOrders.push(employee)
                        orderCount = employeeOrders.length
                    }
                        //window alert needs to say ${employee.name} has had {{blank number}} of sales
                        //will need a way to find total number of sales for each employee
                    }
                    window.alert(`${employee.name} has sold ${orderCount} orders.`)
                }
            }
         }
    }
)