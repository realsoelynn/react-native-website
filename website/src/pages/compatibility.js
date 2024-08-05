/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';

const versions = require('../../versions.json');

function VersionItem({item}) {
  return (
    <tr>
      <td>item.version</td>
      <td> {/* Android relate info */}
        <div>
          Minimum API Level: <code>13.4</code>
        </div>
      </td>
      <td> {/* iOS relate info */}
        <div>
          Minimum API Level: <code>13.4</code>
        </div>
      </td>
    </tr>
  );
};

const CompatibilityPage = () => {
  return (
    <Layout
      title="Compatibility"
      description="List of version and tools that"
      wrapperClassName="compatibility-page">
      <h1>Compatibility</h1>
      <p>
        The sections below describe OS versions and toolchain supported by different versions of React Native.
      </p>

      <table className="versions">
        <thead>
          <tr>
            <th>React Native Version</th>
            <th>Android</th>
            <th>iOS</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </Layout>
  );
};

export default CompatibilityPage;
