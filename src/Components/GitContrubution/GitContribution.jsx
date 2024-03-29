// import React,{useState,useEffect} from 'react'
// import GitHubCalendar from 'react-github-calendar';
// const selectLastHalfYear = contributions => {
//   // const currentYear = new Date().getFullYear();
//   // const currentMonth = new Date().getMonth();
//   // const shownMonths = 6;

//   // return contributions.filter(activity => {
//   //   const date = new Date(activity.date);
//   //   const monthOfDay = date.getMonth();

//   //   return (
//   //     date.getFullYear() === currentYear &&
//   //     monthOfDay > currentMonth - shownMonths &&
//   //     monthOfDay <= currentMonth
//   //   );
//   // });
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = currentDate.getMonth();
//   const shownMonths = 7;

//   return contributions.filter((activity) => {
//     const date = new Date(activity.date);
//     const yearDiff = currentYear - date.getFullYear();
//     const monthDiff = currentMonth - date.getMonth();

//     // Check if the contribution is within the last six months
//     return yearDiff === 0 && monthDiff >= 0 && monthDiff < shownMonths;
//   });
// };  
// export default function GitContribution() {
//   const [contributions, setContributions] = useState([]);
//     const ThemeInput = {
//         light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
//         dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
//       };
//       useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await fetch('https://api.github.com/users/sgravani/events');
//             const data = await response.json();
//             setContributions(data);
//           } catch (error) {
//             console.error('Error fetching GitHub data:', error);
//           }
//         };
    
//         fetchData();
//       }, []);
    
//     return (
//     <div>GitHubCalendar
      
//    {/* <GitHubCalendar username='sgravani' maxLevel={4}
//    year={2023}
//    loading={false}
//         // hideColorLegend={true}
//         // hideTotalCount={true}
//         showWeekdayLabels={true}
//         // theme={{ 
//         //     light : [
//         //     0 : "#f0f0f0"
//         //     1 : "#c4edde"
//         //     2 : "#7ac7c4"
//         //     3 : "#f73859"
//         //     4 : "#384259"
//         //     ],
//         //     dark : [
//         //     0 : "hsl(0, 0%, 22%)"
//         //     1 : "#4D455D"
//         //     2 : "#7DB9B6"
//         //     3 : "#F5E9CF"
//         //     4 : "#E96479"
//         //     ]
//         //     }}
//         // theme={ThemeInput}
//         transformData={selectLastHalfYear} 
//         labels={{
//             totalCount: '{{count}} contributions in the last half year',
//           }}
          
//    /> */}
//     {/* <GitHubCalendar username='sgravani' transformTotalCount={false} maxLevel={9}
//    year={2024}
//    /> */}



// <GitHubCalendar 
//   username="sgravani" 
//   transformData={{contributions}} 
//   hideColorLegend
//   labels={{
//     totalCount: '{{count}} contributions in the last half year',
//   }}
 
// />
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { eachMonthOfInterval, format } from 'date-fns';

export default function GitContribution() {
  const [contributions, setContributions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Generate the date range from July 2023 to January 2024
        const startDate = new Date(2023, 6, 1); // Note: Month is 0-indexed, so 6 represents July
        const endDate = new Date(2024, 0, 31);

        const dateRange = eachMonthOfInterval({ start: startDate, end: endDate });

        // Fetch contributions for each month
        const promises = dateRange.map(async (date) => {
          const response = await fetch(
            // `https://api.github.com/repos/sgravani/stats/commit_activity?since=${format(
            //   date,
            //   'yyyy-MM-dd'
            // )}`
            "https://api.github.com/repos/sgravani/stats/contributors"
          );

          if (!response.ok) {
            throw new Error(`GitHub API request failed with status: ${response.status}`);
          }

          return response.json();
        });

        const contributionsData = await Promise.all(promises);
        setContributions(contributionsData);
      } catch (error) {
        console.error('Error fetching or processing GitHub data:', error);
        setError(error.message || 'An error occurred while fetching GitHub data.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* GitHub Calendar for the specified interval */}
      <GitHubCalendar
        username="sgravani"
        transformData={(contributions) => contributions.flat()} // Flatten the array of arrays
        hideColorLegend
        labels={{
          totalCount: '{{count}} contributions in the specified interval',
        }}
        data={contributions}
      />
    </div>
  );
}