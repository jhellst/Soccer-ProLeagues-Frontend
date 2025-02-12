const BASE_URL = process.env.REACT_APP_BACKEND_SERVICE_URL || 'https://soccer-proleaugues-backend.onrender.com';

/** API Class.
 *
 * Static class that enables frontend to retrieve/update data from the backend database.
 *
 */
class SoccerLeaguesApi {
  // Token to be authorize backend requests on protected routes.
  static token = "";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${SoccerLeaguesApi.token}`,
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': `${BASE_URL}`,
    };

    // Set to undefined since the body property cannot exist on a GET method.
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;
    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  /** Get all leagues in database. */
  static async getLeagues() {
    let leagues = await this.request(`leagues`);
    return leagues;
  }

  /** Get all teams in database. */
  static async getTeams() {
    const teams = await this.request(`teams`);
    return teams;
  }

  /** Get details on a league by its league_id. */
  static async getLeagueById(league_id) {
    let league = await this.request(`leagues/${league_id}`);
    return league;
  }

  /** Get all teams followed by current user. */
  static async getFollowedTeams(user_id) {
    let teams = await this.request(`users/${user_id}/teams`);
    return teams;
  }

  /** Get all teams followed by current user. */
  static async getFollowedLeagues(user_id) {
    let leagues = await this.request(`users/${user_id}/leagues`);
    return leagues;
  }

  /** Get details on a team by its team_id. */
  static async getTeamById(team_id) {
    const team = await this.request(`teams/${team_id}`);
    return team;
  }

  /** Follows a list of teams and adds to the user's followed_teams page. */
  static async followTeam(user_id, team_id) {
    await this.request(`users/${user_id}/teams/${team_id}/follow`, {}, "POST");
  }

  /** Follows a list of teams and adds to the user's followed_teams page. */
  static async unfollowTeam(user_id, team_id) {
    await this.request(`users/${user_id}/teams/${team_id}/unfollow`, {}, "POST");
  }

  /** Follows a league and adds to the user's followed_leagues page. */
  static async followLeague(user_id, league_id) {
    await this.request(`users/${user_id}/leagues/${league_id}/follow`, {}, "POST");
  }

  /** Follows a list of teams and adds to the user's followed_teams page. */
  static async unfollowLeague(user_id, league_id) {
    await this.request(`users/${user_id}/leagues/${league_id}/unfollow`, {}, "POST");
  }


  /** Registers user via signup form. */
  static async registerUser(userRegisterInfo) {
    const res = await this.request('register', userRegisterInfo, "POST");
    return res;
  }

  /** Log in existing user via login form. */
  static async loginUser(userLoginInfo) {
    const res = await this.request('login', userLoginInfo, "POST");
    return res;
  }

  /** Returns user info (username, user_id) for a user. */
  static async getUserInfo(user_id) {
    const res = await this.request(`users/${user_id}`);
    return res;
  }

  /** Returns token for a valid user. */
  static async getToken(username) {
    // const res = await this.request(`users/${user_id}/token`);
    const res = await this.request(`token/${username}`);
    return res;
  }

}

export default SoccerLeaguesApi;