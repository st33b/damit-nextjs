import styles from './tournament_rules.module.scss';
import ReactMarkdown from "react-markdown";

const TournamentRules = () => {
  const markdownContent = `
1. The Dallas Area Masters Invitational Tournament (DAMIT) is a USBC certified tournament. The tournament is a competition open to men and women by invitation only. Therefore, the Tournament Director reserves the right to refuse any application. Space is limited to 156 bowlers. Doubles will consist of 2 members, any mix of men and women. Partial entries will be accepted as long as they can be accommodated.
1. Averages &amp; Scores:
   1. This is a scratch tournament by division, with the exception of Divisions D and CC which will be handicapped as determined by the DAMIT directors. Handicap will be 90% of 180.
   1. Only 10-pin averages can be used.
   1. Any bowler entering the Dallas Area Masters Invitational Tournament must use a ten-pin average acceptable to USBC. Please review items #1-7 below to determine the applicable average.  **Averages will be determined by tournament officials, but for rules #3 and 7 below, additional input is required from the bowler on the registration form.**
      1. USBC sanctioned 2022-2023 Standard Composite average (minimum of 21 total composite games).  Sport averages are not accepted.
      1. If rule C.1 is not available, USBC sanctioned 2021-2022 Standard Composite average (minimum of 21 total composite games).
      1. Bowlers with an average from a non-sanctioned league must submit a complete average list from all leagues bowled, including number of games, and a secretary signed letter or league sheet from the league with the bowler's highest average
      1. If none of the above is available, then the entering average shall be 230.
      1. If a bowler has an IGBO Tournament Average Database (TAD) average of at least 21 games for the current year as of 8/1/2023  that is higher than their standard composite average, they will use their TAD average to enter this tournament. This average may also be used at the tournament director's discretion if they have at least 21 tournament games in the last 12 months  but no (non-sport) league average over the previous 2 years.
      1. We may also use additional data points including ABT, TBST, NTxUSBC, and PSB averages to aid evaluation of entering averages.
      1. **If a bowler has won more than $600 in a single event, the bowler must note this in the comment section of the online entry.  If a bowler has been RE-RATED to a higher average by ANY other tournament, the bowler must note this in the comment section of the online entry.  The bowler should follow-up with any additional details in an email to [DAMITdirectors@gmail.com](mailto:DAMITdirectors@gmail.com). FAILURE TO DO SO COULD RESULT IN FORFEITURE OF ALL WINNINGS.**
   1. Averages will be verified on the www.bowl.com database. A correct USBC number must be provided on the entry form. Any averages that are unavailable or inaccurate on this site must be noted in the comments section of the entry form, with separate verification provided by the league secretary (letter or standing sheet). It is the entrant's responsibility to supply complete and accurate information.
   1. USBC permits the Tournament Directors to assign an average higher than minimum average prior to participation (USBC Rule 319b). A bowler's average may be adjusted upward before the entrant bowls. If the bowler, upon registering, does not accept the assigned average, he/she is entitled to a refund of the entry fee.
1. All entrants must be members of USBC and provide proof of membership and certification number on the entry form. Proof of membership in the 2023-2024 season (sanction card or renewal receipt) must be available during tournament registration. Non-members shall pay a Participation Fee of $5.00 (USBC Rule 301b). Any bowler not a member of an IGBO league shall pay an Associate Member Fee to IGBO of $25.00 annually.  This must be paid at check-in prior to bowling.
1. Each participant shall bowl six (6) games for the singles event. Men and women will compete on an equal basis. Doubles Partnerships may consist of any combination of men and/or women. Each doubles pairing will bowl ten (10) baker doubles games per event.  The standings for each division at the conclusion of the respective qualifying event will determine the finalists. All participants in the stepladder or finals match will cash, but not all those cashing will be eligible for the stepladder final. Payoff ratio 1:5 for singles and doubles. Entrants do not have to make the stepladder final to win prize money.
1. Check-in time for all events is no later than fifteen (15) minutes prior to starting time.
1. Late bowlers will begin in the frame in which they are ready to begin bowling. A "zero" score will be entered in each frame missed. Also see Rule #7.
1. Bowlers will be allowed ten (10) minutes of practice per event unless they are late. Late bowlers will forfeit ALL practice time for the shift that they are late.
1. Substitutes will be allowed to participate at the Tournament Director's discretion.  If competition has started prior to the substitute bowling, scores bowled prior to the substitution (due to injury/incapacitation) will count. Space permitting the substitute will be allowed 5 minutes warm-up on a pair not currently under competition but no practice will be permitted on the lane designated for tournament bowling. The average of the substitute may result in upward change of division for the individual/team but the division of competition will never be decreased once tournament bowling has started.
1. Regular entry fee is $145 per bowler for both events.  If a bowler only wants to enter the singles or baker doubles event, he/she may do so for an entry fee of $85 per person per event. **The regular entry deadline is Monday, September 11th, 2023 at 12pm CDT.  The late entry deadline is Monday, October 2nd, 2023 at 12pm CDT, with a late entry fee of $165 (or $95 to enter one event only). Walk-in entries may be accepted at the tournament director’s discretion. There will be an additional fee of $20 for one event ($115) or $30 for both singles and baker doubles, totalling $195 if walk-in entries are accepted.** Additional fees will go to the prize fund.  All registration and payment is online at www.tourn.io/tournaments/damit-2023. Send any necessary documentation via email to [DAMITdirectors@gmail.com](mailto:DAMITdirectors@gmail.com).
1. All payment of fees must accompany entries. All payments are online through Stripe. You do not have to have a Stripe account to use the secured payment method.  An entry is not considered official until full payment is received.
1. Entry fees, once received, will not be refunded unless at the Tournament Director's discretion.
1. DAMIT format is as follows: 

   Singles Divisions:
      - A = 210+
      - B = 195-209
      - C = 180-194
      - D = 0-179 (Handicapped @ 90% of 180 - average)
       
   Baker Doubles Divisions:
      - AA = 410+ (averages exceeding a combined 459 will be rejected or reassigned)
      - BB = 360-409
      - CC = 0-359 (Handicapped @ 90% 0f (360 - combined average)/2)

      NOTE:  The Baker Doubles format is defined as one teammate bowling the odd number frames and the other teammate bowling the even number frames.

   1. Singles:  There will be six (6) games of qualifying bowled across a set of lanes. Based on the number of entries per division, a designated number of bowlers will advance to the finals. See rule 14C for a specific number. Ties for advancing to finals  will be broken by a 9th and 10th frame roll-off. Ties for positioning will be broken by the highest qualifying game getting the higher seed.
   1. Baker Doubles:   There will be ten (10) games of qualifying bowled across a set of lanes. Bowlers may only switch team order after moving to each new pair of lanes.  Based on the number of entries per division a designated number of teams will advance to the  finals-see rule 14D for specific numbers. Ties for advancing to stepladder will be broken by 9th and 10th frame roll-off. Ties for positioning will be broken by the highest qualifying game getting the higher seed.
   1. Singles:
      - 20 or fewer entries: 3 bowlers advance to a step-ladder final
      - 21-27 entries: 4 bowlers advance to a step-ladder final
      - 28 or more entries: 5 bowlers advance to a step-ladder final
   1. Baker Doubles:
      - 20 or fewer teams: 3 teams advance to a step-ladder final
      - 21-27  teams: 4 teams advance to a step-ladder final
      - 28 or more teams: 5 teams advance to a step-ladder final
      - Each “game” in Baker Doubles is two games bowled on a pair of lanes. The lead-off bowler will start one game on each pair; this allows for both bowlers to compete on each of the two lanes to factor in inherent variations between lanes.  Doubles are two (2) game total pin matches.
   1. Practice:  For the qualifying rounds, practice will only be on the bowler's starting pair and will be 10 minutes.  For the stepladder finals, practice will be allowed two balls per lane before the bowler's first match bowled. The competitor advancing in the step-ladder shall not receive additional practice. A designated practice/warm-up pair will be available for the bowlers waiting for their match during the final rounds.
   1. Lane assignments will be drawn randomly by the directors of the tournament. For both Singles and Baker Doubles-the bowler(s) starting on the left lane will move one pair to the left and the bowlers on the right will move one pair to the right after each game during singles or two (2) games during doubles.
1. All incomplete entries will be returned, unprocessed. A complete entry package consists of the following:
   - Completed Entry Form.
   - Appropriate fees in U.S. funds (see Rule # 9)
   - Completed average verification form (see Rule # 2).
   - Payment shall be made via Stripe. If required, any additional average verification information must also be submitted via email to [DAMITdirectors@gmail.com](mailto:DAMITdirectors@gmail.com). Legible photographs or scanned documents are both acceptable.
1. We will be paying out 1:5 entrants. All competitors who make the roll-off in the respective divisions will cash, but entrants beyond those qualifying for the stepladder will receive prize money dependent upon the number of entrants in the division. Each event has its own prize fund based on the number of entrants. There will be 100% cash return on all prize fees. The payout ratio will be 1:5 for Singles and 1:5 for Doubles. Stepladder qualifiers will be 1:6, but those in the top 20% in each event will cash even though they didn’t make the roll-off. Payouts will occur immediately after completion of each event.
1. Premature termination or interruption of the tournament brought about by war, national or local disaster/emergency, or emergency causes relating to or from fire, natural disaster, or any other reason beyond the control of DAMIT committee shall cause, to the extent required thereby, all advertised prizes, guaranteed or otherwise, to be pro-rated in accordance with the number of entrants who have bowled in each of the respective events up to the time of such termination.
1. Tournament Dates: October 7-8, 2023
1. All events will be held at Plano Super Bowl 2521 K Ave, Plano, TX 75074. 972-881-0242
1. Total Entry Fee $145 per bowler for both Singles and Baker Doubles. Entry fee breakdown (Any late fees [$10 per bowler per event or $20 Late Fee for both events] will go directly to the prize fund): Walk in fees will also be added to the prize fund ($20 per bowler per event for one event, or $30 per bowler for both events.
   - Prize Fund:     $90
   - Lineage:     $38.50
   - Expenses:     $16.50

   Entry for only  one event (singles event only or one-half of the doubles event only) is $85:
   - Prize Fund:    $53.50
   - Lineage:    $21 (singles) / 17.5 (doubles))
   - Expenses:    $10.50 (singles) / 14 (doubles)
1. Rules subject to change upon 2023 USBC sanction approval. Any rules changes will be posted at registration.
1. Equipment rule: Bowling balls must be USBC approved and drilled, meeting all USBC requirements. Pre-release bowling balls will not be allowed.
`

  return (
    <section className={styles.TournamentRules}>
      <h3 className={`section-heading`}>
        The rules, DAMIT!
      </h3>

      <ReactMarkdown>{markdownContent}</ReactMarkdown>

      {/*<h4>*/}
      {/*  Pending finalization.*/}
      {/*</h4>*/}
      {/*<div className={`pt-3 ${styles.Placeholder}`} aria-hidden={true}>*/}
      {/*  <div className={'h5'}>*/}
      {/*    <span className={'col-3 placeholder placeholder-lg d-block'}></span>*/}
      {/*  </div>*/}
      {/*  {[0,1,2,3,4].map(num => (*/}
      {/*    <p key={num}>*/}
      {/*      <span className={'placeholder col-1'}></span>*/}
      {/*      <span className={'placeholder col-5'}></span>*/}
      {/*      <span className={'placeholder col-6'}></span>*/}
      {/*      <span className={'placeholder col-1'}></span>*/}
      {/*      <span className={'placeholder col-11'}></span>*/}
      {/*      <span className={'placeholder col-1'}></span>*/}
      {/*      <span className={'placeholder col-3'}></span>*/}
      {/*      <span className={'placeholder col-1'}></span>*/}
      {/*      <span className={'placeholder col-4'}></span>*/}
      {/*      <span className={'placeholder col-10'}></span>*/}
      {/*      <span className={'placeholder col-8'}></span>*/}
      {/*    </p>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </section>
  );
}

export default TournamentRules;
