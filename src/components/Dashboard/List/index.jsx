import React from 'react';
import './style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';

function List({ coin }) {
  // Guard clause to handle undefined `coin` prop
  if (!coin) {
    return null;
  }

  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">
      {/* Coin Logo */}
      <td className="td-image">
        <Tooltip title="Logo" placement="bottom-start">
          <img src={coin.image} alt={`${coin.name} logo`} className="coin-logo" />
        </Tooltip>
      </td>

      {/* Coin Name and Symbol */}
      <td>
        <div className="name-col">
          <Tooltip title="Symbol" placement="bottom-start">
            <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
          </Tooltip>
          <Tooltip title="Name" placement="bottom-start">
            <p className="coin-name">{coin.name}</p>
          </Tooltip>
        </div>
      </td>

      {/* Price Change Percentage */}
      <Tooltip title="Percentage Change in 24hr" placement="bottom-start">
        <td className="chip-flex">
          <div
            className={`price-chip ${
              coin.price_change_percentage_24h < 0 ? 'price-chip-red' : ''
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`td-icon ${
              coin.price_change_percentage_24h < 0 ? 'icon-chip-red' : 'icon-chip'
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpRoundedIcon />
            ) : (
              <TrendingDownRoundedIcon />
            )}
          </div>
        </td>
      </Tooltip>

      {/* Current Price */}
      <Tooltip title="Current Price" placement="bottom-start">
        <td>
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? 'var(--red)'
                  : 'var(--green)',
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>

      {/* Total Volume */}
      <Tooltip title="Total Volume" placement="bottom-end">
        <td>
          <p className="total-volume td-right-align td-total-volume">
            {coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>

      {/* Market Cap (Desktop) */}
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="desktop-td-mkt">
          <p className="total-volume td-right-align">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>

      {/* Market Cap (Mobile) */}
      <Tooltip title="Market Cap (Simplified)" placement="bottom-end">
        <td className="mobile-td-mkt">
          <p className="total-volume td-right-align">
            ${convertNumber(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
    </Link>
  );
}

export default List;
