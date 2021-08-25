class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        render() {
            return (
                <div>
                    <img src="./public/assets/SparksBG.gif" alt="Black background with moving sparks" />
                    <h1 class="mx-auto text-6xl font-extrabold text-yellow-400 text-center mb-4">Spark</h1>
                    <form action="">
                        <div class="space-y-4">
                            <div>
                                <label htmlFor="email-address">Email</label>
                                <input id="email-address"
              name="email"
              type="text"
              autocomplete="email"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Email address"/>
                            </div>
                        </div>
                    </form>
                    <div></div>
                    </div>
            )
        }
    }