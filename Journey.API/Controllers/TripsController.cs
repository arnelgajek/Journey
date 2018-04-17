using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Journey.API.Controllers
{
    [RoutePrefix("api/Trips")]
    public class TripsController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            //ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;

            //var Name = ClaimsPrincipal.Current.Identity.Name;
            //var Name1 = User.Identity.Name;

            //var userName = principal.Claims.Where(c => c.Type == "sub").Single().Value;

            return Ok(Trip.CreateTrips());
        }

    }


    #region Helpers

    public class Trip
    {
        public int TripId { get; set; }

        public DateTime Date { get; set; }

        public int KmStart { get; set; }

        public int KmStop { get; set; }

        // public int KmTotal { get; set; } Behövs ej då den räknas ihop med KmStart + KmStop

        public string StartAddress { get; set; }

        public string StopDestination { get; set; }

        public string Arrend { get; set; }

        public string Notes { get; set; }


        public static List<Trip> CreateTrips()
        {
            List<Trip> TripList = new List<Trip>
            {
                new Trip {TripId = 10248, /*Date = ,*/ KmStart = 10100, KmStop = 10200, StartAddress = "Drottninggatan 16", StopDestination = "Ågårdsvägen 69", Arrend = "Testa Journey", Notes = "Funkar helt okej." },
            };

            return TripList;
        }
    }

    #endregion
}
