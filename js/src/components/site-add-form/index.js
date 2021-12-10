import React, { useState } from 'react';
import TextField from '../textfield';
import Popup from "reactjs-popup";
import SiteDeleteConfirm from "../site-delete-confirm";

const SiteAddForm = ({ closeModalCallback, id, name, faviconUrl, url, endpoint, token }) => {
  const [deleteSiteOpen, setDeleteSiteModalOpen] = useState(false);
  const closeDeleteSiteModal = () => setDeleteSiteModalOpen(false);

  return (
    <div className="site-add-form">
      <div className="form-elements">
        <TextField
          name="site-name"
          description="The Site Name."
          placeholder="Site Name"
          defaultValue={name}
        />
        <TextField
          name="site-url"
          description="The Site URL."
          placeholder="Site URL"
          defaultValue={url}
        />
        <TextField
          name="site-endpoint-url"
          description="The Site API Endpoint URL."
          placeholder="API Endpoint"
          defaultValue={endpoint}
        />
        <TextField
          name="site-token"
          description="The Site API Token."
          placeholder="API Token"
          defaultValue={token}
        />
      </div>
      <div className="actions">
        <button className="site-tile-btn primary" type="submit">Save</button>
        <button className="site-tile-btn secondary" onClick={() => closeModalCallback() }>Cancel</button>
        <button className="site-tile-btn tertiary" onClick={() => setDeleteSiteModalOpen(o => !o)}>Delete Site</button>
      </div>
      <Popup
        closeOnEscape
        lockScroll
        closeOnDocumentClick={false}
        className="site-dash-modal delete-confirm"
        open={deleteSiteOpen}
        onClose={closeDeleteSiteModal}
      >
        <SiteDeleteConfirm closeModalCallback={closeDeleteSiteModal} />
      </Popup>
    </div>
  )
};

export default SiteAddForm;
