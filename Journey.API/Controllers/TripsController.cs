using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace Journey.API.Controllers
{
    public class TripsController : ApiController
    {
        [Authorize]
        public List<string> GetTrips()
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
            var userName = principal.Claims.Where(c => c.Type == "user_name").Single().Value;

            return new List<string> { "Doboj", "Ljungby", "Helsingborg", userName };
        }
    }
}

