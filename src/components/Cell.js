import React from 'react';
import styled, { css } from 'styled-components';

const Cell = (props) => {
    const { param } = props;
    let note;
    const num = param.num === '*' ?
    <Svg version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" space="preserve">
        <g>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M44.921,90.799c-4.176-0.188-8.032-1.566-11.849-3.127
                c-0.777-0.316-0.962-0.789-1.018-1.555c-0.283-3.871-2.079-7.094-4.442-10.055c-3.615-4.531-8.108-7.568-14.006-8.176
                c-0.595-0.061-1.005-0.223-1.239-0.795c-1.586-3.885-3.041-7.801-3.211-12.061c0.454-0.789,0.087-1.623,0.161-1.936
                c0.003,0.07,0.25,0.666-0.25,1.16c-0.531-2.844-0.531-5.688,0-8.533c0.499,0.497,0.255,1.092,0.25,1.17
                c-0.075-0.322,0.296-1.157-0.165-1.946c0.17-4.253,1.619-8.168,3.211-12.04c0.428-1.04,1.383-0.397,1.999-0.591
                c4.224-1.33,8.275-2.955,11.43-6.4c3.338-3.646,5.98-7.499,6.305-12.588c0.033-0.527,0.373-0.795,0.836-0.96
                c3.911-1.385,7.731-3.11,11.99-3.189c0.787,0.493,1.626,0.031,2.009,0.161c-0.142,0.008-0.737,0.252-1.234-0.247
                c2.845-0.531,5.689-0.531,8.534,0c-0.496,0.5-1.092,0.253-1.161,0.25c0.313-0.073,1.146,0.293,1.936-0.161
                c4.184,0.175,8.038,1.572,11.86,3.129c0.78,0.318,0.938,0.804,1.017,1.56c0.399,3.798,2.125,6.973,4.383,10.026
                c3.552,4.802,8.263,7.374,14.053,8.182c0.718,0.1,1.059,0.391,1.319,1.021c1.521,3.669,2.846,7.387,3.097,11.4
                c-0.349,0.742-0.126,1.472-0.154,2.024c-0.182-0.168-0.03-0.478,0.27-0.777c0.549,2.829,0.549,5.657,0,8.485
                c-0.312-0.135-0.177-0.492-0.357-0.719c0.176,0.506-0.116,1.074,0.28,1.518c-0.224,4.088-1.446,7.912-3.098,11.617
                c-0.349,0.783-0.853,1.166-1.855,1.299c-8.937,1.176-16.687,8.969-17.924,17.916c-0.106,0.771-0.098,1.418-1.017,1.805
                c-6.796,2.863-13.798,4.273-21.182,3.219c0.133-0.193,0.327-0.279,0.554-0.281c0.369-0.002,0.743-0.078,0.853-0.025
                C46.543,90.711,45.71,90.346,44.921,90.799z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M70.189,83.943c2.287-6.867,6.728-11.578,13.729-13.729
                c0.723,0.029,1.345,0.295,1.87,0.791c1.493,5.719,3.022,11.43,4.458,17.162c0.442,1.768-0.319,2.537-2.08,2.096
                c-5.735-1.434-11.447-2.965-17.169-4.457C70.455,85.305,70.228,84.664,70.189,83.943z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M83.917,29.76c-3.179-0.75-5.621-2.559-7.983-4.809
                c-2.463-2.345-4.377-4.91-5.617-8.027c-0.107-0.271-0.086-0.593-0.124-0.892c0.249-0.628,0.211-1.378,0.789-1.868
                c5.727-1.496,11.445-3.029,17.188-4.463c1.766-0.441,2.523,0.325,2.08,2.096c-1.436,5.736-2.967,11.448-4.46,17.17
                C85.3,29.551,84.548,29.512,83.917,29.76z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M14.147,28.958c-1.493-5.721-3.023-11.433-4.458-17.168
                c-0.441-1.761,0.325-2.514,2.092-2.089c5.006,1.205,10.011,2.427,14.958,3.844c0.715,0.205,1.646-0.14,2.204,0.62
                c0.21,0.529,0.975,0.721,0.875,1.438c-0.157,2.451-1.399,4.506-2.939,6.187c-3.169,3.459-6.168,7.3-11.305,8.049
                C14.857,29.937,14.66,29.191,14.147,28.958z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M16.011,70.209c2.903,0.357,5.013,2.158,6.953,4.078
                c2.723,2.695,5.855,5.145,6.728,9.211c-0.168,0.797,0.055,1.725-0.763,2.307c-5.712,1.492-11.416,3.02-17.143,4.455
                c-1.749,0.439-2.532-0.344-2.094-2.094c1.436-5.725,2.963-11.428,4.455-17.141C14.647,70.477,15.294,70.262,16.011,70.209z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M46.375,6.921c-0.546,0.346-1.122,0.418-1.872,0.155
                c1.351-1.984,2.628-3.957,4.009-5.855c0.937-1.287,2.001-1.287,2.935,0.066c1.321,1.914,2.619,3.845,3.952,5.807
                c-0.721,0.242-1.298,0.175-1.844-0.173c-0.859-0.552-1.76-0.292-2.655-0.132c-0.626,0-1.251,0-1.877,0
                C48.129,6.629,47.232,6.369,46.375,6.921z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M49.032,93.164c0.622,0,1.244,0,1.865,0
                c0.894,0.205,1.787,0.451,2.647-0.111c0.542-0.346,1.116-0.418,1.88-0.162c-1.453,2.113-2.762,4.27-4.334,6.211
                c-0.979,1.211-2.049,0.498-2.782-0.563c-1.249-1.809-2.458-3.645-3.7-5.494c0.63-0.602,1.2-0.238,1.77,0.008
                C47.241,93.615,48.138,93.367,49.032,93.164z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#333032" d="M6.881,53.129c0.387,0.693,0.413,1.424,0.216,2.35
                c-2.143-1.475-4.291-2.801-6.25-4.361c-1.051-0.838-0.68-1.88,0.417-2.621c1.933-1.304,3.851-2.628,5.843-3.991
                c0.185,0.916,0.147,1.649-0.226,2.346c-0.633,0.465-0.085,1.125-0.274,1.667c0,0.972,0.001,1.943,0,2.91
                C6.78,51.98,6.27,52.645,6.881,53.129z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M93.034,46.869c-0.387-0.619-0.308-1.314-0.346-2.08
                c2.431,0.72,3.99,2.733,6.11,3.861c1.17,0.622,1.266,1.883,0.108,2.582c-2.099,1.268-3.807,3.109-6.115,4.109
                c-0.161-0.797-0.131-1.531,0.242-2.232c0.666-0.439,0.093-1.098,0.285-1.623c0-0.973-0.001-1.945-0.001-2.914
                C93.121,48.023,93.695,47.343,93.034,46.869z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M28.929,85.805c0.254-0.77,0.509-1.539,0.763-2.307
                C29.638,84.332,31.244,85.717,28.929,85.805z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262325" d="M16.011,70.209c-0.584,0.357-1.116,0.836-1.864,0.816
                C14.105,69.238,15.117,69.855,16.011,70.209z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#272326" d="M85.789,71.006c-0.769,0.078-1.276-0.457-1.87-0.791
                C84.8,69.869,85.812,69.215,85.789,71.006z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262325" d="M70.189,83.943c0.346,0.588,0.985,1.049,0.809,1.863
                C69.213,85.844,69.861,84.824,70.189,83.943z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#191418" d="M6.395,51.822c0-1.223,0-2.443,0-3.664
                c0.138-0.211,0.276-0.211,0.415-0.002c0,1.223,0,2.445,0,3.666C6.67,52.033,6.532,52.031,6.395,51.822z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#191418" d="M93.53,48.16c0,1.22,0,2.44,0,3.661
                c-0.131,0.217-0.265,0.207-0.398,0.002c0-1.221,0-2.443,0-3.666C93.266,47.949,93.399,47.95,93.53,48.16z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M70.981,14.166c0.074,0.765-0.459,1.273-0.789,1.868
                C69.899,15.176,69.196,14.146,70.981,14.166z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#272326" d="M29.819,15.603c-0.255-0.502-1.245-0.557-0.875-1.438
                C30.075,14.133,30.486,14.54,29.819,15.603z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262325" d="M14.147,28.958c0.864-0.335,0.931,0.621,1.427,0.881
                C14.523,30.478,14.11,30.082,14.147,28.958z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M83.917,29.76c0.596-0.33,1.107-0.859,1.872-0.791
                C85.809,30.756,84.777,30.055,83.917,29.76z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D181C" d="M46.375,6.921c0.841-0.878,1.739-0.604,2.647-0.132
                C48.14,6.833,47.258,6.877,46.375,6.921z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D181C" d="M50.899,6.79c0.854-0.657,1.798-0.371,2.723-0.253
                c0.024,0.003,0.054,0.132,0.042,0.195c-0.012,0.068-0.071,0.127-0.109,0.19C52.67,6.877,51.785,6.833,50.899,6.79z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M55.005,9.181c-0.86,0.774-1.807,0.392-2.748,0.121
                c0.657-0.07,1.315-0.14,1.974-0.21C54.488,9.122,54.747,9.152,55.005,9.181z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M45.696,9.092c0.658,0.07,1.315,0.14,1.973,0.21
                c-0.941,0.269-1.888,0.656-2.748-0.124C45.18,9.149,45.438,9.121,45.696,9.092z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M9.151,44.947c0.781,0.86,0.394,1.807,0.125,2.75
                c-0.07-0.658-0.14-1.316-0.21-1.974C9.094,45.464,9.123,45.206,9.151,44.947z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1B171A" d="M53.545,93.053c-0.691,0.705-1.161,0.725-2.647,0.111
                C51.78,93.127,52.662,93.09,53.545,93.053z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M44.921,90.799c0.861-0.775,1.807-0.393,2.749-0.121
                c-0.658,0.07-1.316,0.141-1.974,0.209C45.438,90.857,45.18,90.828,44.921,90.799z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#262225" d="M9.066,54.256c0.07-0.658,0.14-1.316,0.21-1.975
                c0.271,0.943,0.653,1.889-0.121,2.75C9.125,54.773,9.095,54.514,9.066,54.256z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1B171A" d="M49.032,93.164c-0.844,0.705-1.796,0.385-2.723,0.277
                c-0.023-0.002-0.053-0.133-0.041-0.197c0.013-0.068,0.072-0.129,0.11-0.191C47.263,93.09,48.148,93.127,49.032,93.164z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#231F22" d="M90.849,45.747c-0.08,0.355-0.16,0.711-0.306,1.357
                c-0.244-1.101-0.451-1.891,0.19-2.604C90.772,44.916,90.811,45.332,90.849,45.747z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1F1B1E" d="M6.395,51.822c0.139,0,0.277,0.002,0.415,0
                c0.024,0.436,0.048,0.871,0.072,1.307c-0.05,0.137-0.061,0.314-0.156,0.4C6.49,53.74,6.4,53.572,6.396,53.342
                C6.388,52.836,6.395,52.328,6.395,51.822z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#201C1F" d="M93.53,48.16c-0.133-0.002-0.266-0.003-0.398-0.003
                c-0.032-0.429-0.065-0.858-0.098-1.288c0.049-0.138,0.062-0.311,0.154-0.406c0.216-0.221,0.334-0.086,0.34,0.161
                C93.539,47.136,93.531,47.648,93.53,48.16z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#201C1F" d="M93.132,51.822c0.133,0,0.266,0,0.399-0.002
                c0,0.512,0.008,1.023-0.003,1.535c-0.006,0.248-0.125,0.381-0.34,0.16c-0.093-0.096-0.105-0.27-0.154-0.406
                C93.066,52.68,93.1,52.252,93.132,51.822z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#231F22" d="M90.771,55.031c-0.659-0.486-0.377-1.143-0.42-1.822
                c0.623,0.221,0.301,0.73,0.497,1.023C90.823,54.498,90.797,54.766,90.771,55.031z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1F1B1E" d="M6.81,48.156c-0.138-0.001-0.276,0-0.415,0.002
                c0-0.507-0.006-1.015,0.001-1.522c0.003-0.23,0.096-0.397,0.329-0.185c0.095,0.086,0.107,0.264,0.156,0.4
                C6.858,47.286,6.834,47.721,6.81,48.156z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#FDFDFD" d="M61.986,50.092c-0.031,5.568-5.378,12.213-10.029,12.15
                c-8.876-0.121-13.774-4.457-13.97-12.281c-0.176-7.021,5.446-12.051,12.119-11.997C56.728,38.019,62.024,43.423,61.986,50.092z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#322F31" d="M39.931,48.628c0.271-3.998,3.123-7.747,8.675-8.67
                c0.906,0.284,1.813,0.282,2.72,0.001c4.722,0.541,8.115,3.937,8.667,8.673c-0.279,0.906-0.277,1.813-0.001,2.719
                c0.021,4.037-4.857,8.801-8.671,8.666c-0.907-0.275-1.813-0.281-2.719,0.004c-4.755-0.553-8.12-3.916-8.671-8.674
                C40.216,50.441,40.214,49.535,39.931,48.628z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D181C" d="M39.931,48.628c0.62,0.907,0.623,1.813,0,2.72
            C39.695,50.441,39.695,49.535,39.931,48.628z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1E191D" d="M59.991,51.352c-0.613-0.906-0.616-1.813,0.001-2.719
            C60.231,49.539,60.231,50.445,59.991,51.352z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1C181B" d="M51.325,39.959c-0.907,0.617-1.813,0.62-2.72-0.001
            C49.512,39.726,50.419,39.726,51.325,39.959z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D181C" d="M48.602,60.021c0.905-0.623,1.812-0.615,2.719-0.004
            C50.414,60.256,49.508,60.256,48.602,60.021z"/>
        </g>
        {param.note === 'flag' ? 
        <Svg version="1.1" x="0px" y="0px" viewBox="0 0 469.785 469.785" enable-backgroun=":new 0 0 469.785 469.785" space="preserve">
            <g transform="matrix(1.25 0 0 -1.25 0 45)">
                <g>
                    <g>
                        <path fill="red" d="M228.294-151.753L367.489-12.558c11.116,11.105,11.116,29.116,0,40.22
                c-11.105,11.116-29.104,11.116-40.22,0L188.073-111.533L48.866,27.663c-11.093,11.116-29.116,11.116-40.22,0
               c-11.105-11.105-11.105-29.116,0-40.22l139.207-139.196L8.338-291.268c-11.116-11.116-11.116-29.116,0-40.22
               c5.552-5.564,12.834-8.34,20.116-8.34c7.27,0,14.552,2.776,20.105,8.34l139.514,139.514l139.196-139.196
               c5.564-5.552,12.834-8.34,20.116-8.34c7.27,0,14.552,2.788,20.105,8.34c11.116,11.105,11.116,29.104,0,40.22L228.294-151.753z"/>
                    </g>
                </g>
            </g>
        </Svg> : null}
    </Svg> 
    : param.num;
    if (param.note === 'idk') {
        note = '?'
    }
    else if (param.note === 'flag') {
        note = <Svg version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" space="preserve">
        <g>
            <path fillRule="evenodd" clipRule="evenodd" fill="#5C5A44" d="M14.677,100.204c-1.177-1.979-2.064-3.892-2.054-6.419
                c0.124-28.486,0.081-56.975,0.081-85.462c0-2.499-0.332-5.213,2.756-6.26c3.703-1.256,6.16,0.779,6.204,5.295
                c0.092,9.495,0.032,18.991,0.032,28.487c0.001,18.825-0.037,37.649,0.037,56.475c0.012,3.118-0.351,5.906-3.056,7.884
                C17.343,100.204,16.01,100.204,14.677,100.204z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#E42912" d="M88.748,10.235c2.628-1.525,2.415,0.785,2.421,2.025
                c0.064,14.472,0.053,28.944-0.009,43.416c-0.009,1.919-0.887,3.372-2.829,4.292c-11.129,5.271-22.184,6.161-33.432,0.234
                c-5.511-2.903-10.95-5.862-17.706-5.526c-4.024,0.2-7.151,2.282-11.386,3.54c0-8.598,0-16.81,0-25.021
                c0-6.654-0.007-13.308,0-19.962c0.01-8.343,5.868-13.479,14.201-12.395c3.496,0.456,7.042,1.3,9.792,3.447
                c11.149,8.707,23.229,11.709,36.838,6.839c0.605,0.89,1.413,1.384,2.366,0.656C89.623,11.31,89.293,10.681,88.748,10.235z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#E31C04" d="M88.748,10.235c0.545,0.445,0.875,1.074,0.257,1.547
                c-0.953,0.728-1.761,0.233-2.366-0.656C87.342,10.829,88.045,10.532,88.748,10.235z"/>
        </g>
            </Svg>;
    }
    else {
        note = null;
    }
    return (
        <Sq red={param.red} num={param.num} isClosed={param.isClosed} onContextMenu={props.flagOn(param.id)} onClick={props.func(param.id)}>
            {param.isClosed || param.num === 0 ? note : num}
        </Sq>
    )
}
const Sq = styled.td`
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-family: 'Arial Black', Arial, sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 16px;
    vertical-align: middle;
    cursor: default;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: #bdbdbd;
    border-bottom: solid 2px #7b7b7b;
    border-right: solid 2px #7b7b7b;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff; 
    ${props => !props.isClosed && css`
        border-left: solid 1px #7b7b7b;
        border-top: solid 1px #7b7b7b;
        border-bottom: none;
        border-right: none;
        text-align: center;
  `}
    ${props => props.red && css`
    background: red;
  `}

    ${props => {
        if (!props.isClosed) {
            switch (props.num) {
                case 1:
                    return css`color: blue`;
                case 2:
                    return css`color: green`;
                case 3:
                    return css`color: red`;
                case 4:
                    return css`color: purple`;
                case 5:
                    return css`color: maroon`;
                case 6:
                    return css`color: turquoise`;
                case 7:
                    return css`color: black`;
                case 8:
                    return css`color: gray`;
                default:
                    break;
            }
        }
    }
    }
    :active{
        border: none;
    }
`;
const Svg = styled.svg`
    width: 13px;
    height: 13px ;
`;

export default Cell;