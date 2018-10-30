# usersApp-services-Angular7

A basic Angular project, to demonstrate the use of Services in Angular.

Working:
1. 2 components "active-users" and "inactive-users" are displayed with list of active/inactive users
2. We can move the active usewrs into inactive users' list and vice versa.
3. This means users of "active-users" component will move to the list of inactive users in "inactive-users" component and vice versa.
4. By using Services to implement this eliminates use of event emmiter and input, output from the components' type script files.
5. There is another functionality that the count is displayed on console whenever a user is pushed from active to inactive or from inactive to active.
6. This is achieved by using another servie "counter service" and making user inject



Using Services not only makes code very optimized and clean but it also enables easy cross-component conversation.

To inject a service in another service, we use @Injectable() on the service class where other service is injected.
Also, Hierarchy of services in Angular is very important.

If we Inject a service in a component (by using @Injector decorator), we get an instabce of the service in the component and now that inctance is available to all the child compüonents. Thus child components do not need to use @Injector for that service.
If child also injects an instace of the same Service as the parent component, a new instance will be generated and this will lead to problem in our code's execution.


The screenshots of user service working: https://github.com/ShradhaPandey/usersApp-services-Angular7/issues/1#issue-375516133
The screenshots of counter service working: https://github.com/ShradhaPandey/usersApp-services-Angular7/issues/2#issue-375521682

